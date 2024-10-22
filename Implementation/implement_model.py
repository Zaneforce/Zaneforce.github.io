import cv2
import numpy as np
from tensorflow.keras.models import load_model

# load model yang sudah dilatih
model = load_model(r"C:\Users\ASUS\OneDrive\Tugas Kuliah\HTML\Project AI\Implementation\model_fer2013.h5")

# load class label dari FER2013
emotion_labels = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']

# menggunakan OpenCV untuk menangkap video
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # deteksi wajah
    face_detector = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_detector.detectMultiScale(gray_frame, 1.3, 5)

    for (x, y, w, h) in faces:
        roi_gray = gray_frame[y: y + h, x: x + w]
        roi_gray = cv2.resize(roi_gray, (48, 48))
        roi_gray = roi_gray.astype("float32") / 255
        roi_gray = np.expand_dims(roi_gray, axis = 0)
        roi_gray = np.expand_dims(roi_gray, axis = -1)

        # prediksi ekspresi
        prediction = model.predict(roi_gray)
        max_index = np.argmax(prediction[0])
        predicted_emotion = emotion_labels[max_index]

        # menampilkan hasil pada frame video
        cv2.putText(frame, predicted_emotion, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)
        cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)

    # tampilkan frame
    cv2.imshow("Facial Expression Recognition", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# bersihkan
cap.release()
cv2.destroyAllWindows()
