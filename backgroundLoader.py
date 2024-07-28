import os


def get_file_extension(file_name):
    for i in range(len(file_name)):
        if file_name[i] == ".":
            return file_name[i + 1:]


def get_content():
    with open("config.js", "r") as file:
        data = file.read()
        for i in range(len(data)).__reversed__():
            if data[i] == "[":
                return data[0:i]


def get_path():
    is_valid = False
    while not is_valid:
        location = input("Select directory containing the images (leave blank for default location): ")
        if location == "":
            return "assets/background_images"
        elif os.path.exists(location) and os.path.isdir(location):
            return location[0:len(location) - 1]
        else:
            print("Invalid location selected!")


def get_images():
    supported_extensions = ["jpg", "png", "svg", "webp"]
    images = []
    for image in os.listdir(image_location):
        file_extension = get_file_extension(image)
        if file_extension in supported_extensions:
            images.append(f"{image_location}/{image}")
    return images


image_location = get_path()
images = get_images()

content = get_content()

with open("config.js", "w") as file:
    file.write(content + str(images))

print(f"Added {len(images)} images.")
