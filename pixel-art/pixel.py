import cv2
import numpy as np


def pixel_art(img: np.ndarray, pixel_size: int):
    h, w = img.shape[:2]

    # 1. Reducir resolución (downscaling)
    temp = cv2.resize(img, (w // pixel_size, h // pixel_size), interpolation=cv2.INTER_LINEAR)

    # 2. Volver a escalar al tamaño original (upscaling, bloque por bloque)
    pixelated = cv2.resize(temp, (w, h), interpolation=cv2.INTER_NEAREST)

    return pixelated

# Ejemplo de uso
image_path = "starry-night.webp"
img: np.ndarray = cv2.imread(image_path)


print(img.shape)
output = pixel_art(img, pixel_size=5)

cv2.imwrite("pixel_art_linear.jpg", output)
cv2.imshow("Pixel Art", output)

cv2.waitKey(0)
cv2.destroyAllWindows()
