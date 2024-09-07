import React, { useState } from "react";
import noImage from "../../assets/noImage.jpeg";
import { Category, ProductType } from "../../Types/Types";
import userAuth from "../../Context/userContext";
import { setDoc } from "firebase/firestore";
import { productRef, storage } from "../../Firebase/FireBaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Loading from "../Loading/Loading";

const Sell = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [category, setCategory] = useState<Category>();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(noImage);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = userAuth();
  const navigate = useNavigate();

  // function to handle the image preview to the screen
  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setImageFile(selectedImage);
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  // function for sell product form submit
  const handleSellProductSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!validateSellForm()) return;

    try {
      setLoading(() => true);
      if (imageFile) {
        // Upload the image
        const imageRef = ref(storage, `images/${user?.uid}/${Date.now()}`);
        await uploadBytes(imageRef, imageFile);

        // Get image URL
        const imageUrl = await getDownloadURL(imageRef);

        // Prepare product data
        const dataToInsert: ProductType = {
          title: title,
          userID: user?.uid || "",
          description: description,
          price: price,
          location: location,
          category: category as Category,
          image: imageUrl,
          date: Date.now(),
        };

        // Add product to Firestore
        await setDoc(productRef, dataToInsert);

        toast.success("The product has been successfully listed!");
        setLoading(() => false);
        navigate("/");
      } else {
        toast.error("Please upload an image before submitting.");
      }
    } catch (error) {
      console.error("Error listing product:", error);
      toast.error("Failed to list product. Try again.");
    }
  };

  // function to validate the form fields
  const validateSellForm = (): boolean => {
    if (!category) {
      toast.error("Please select a category");
      return false;
    }

    if (title.trim() === "") {
      toast.error("Please enter a valid title");
      return false;
    }

    if (description.trim() === "") {
      toast.error("Please enter a valid description");
      return false;
    }

    if (isNaN(Number(price)) || Number(price) <= 0) {
      toast.error("Please enter a valid price");
      return false;
    }

    if (location.trim() === "") {
      toast.error("Please enter a valid location");
      return false;
    }

    if (!imageFile) {
      toast.error("Please upload at least one image");
      return false;
    }

    return true;
  };

  if (loading) {
    return <Loading transparent={true} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="border shadow-md w-11/12 md:w-4/5 rounded-md p-8 bg-white">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => handleSellProductSubmit(e)}
        >
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            {/* Category Selection */}
            <div className="flex flex-col">
              <label htmlFor="category-select" className="font-semibold">
                Select a Category
              </label>
              <select
                id="category-select"
                className="p-2 border rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                <option value="" disabled>
                  choose a category
                </option>
                <option value="Cars" defaultChecked>
                  Cars
                </option>
                <option value="Properties">Properties</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Jobs">Jobs</option>
                <option value="Bikes">Bikes</option>
                <option value="Electronics & Appliances">
                  Electronics & Appliances
                </option>
                <option value="Furniture">Furniture</option>
                <option value="Fashion">Fashion</option>
                <option value="Books, Sports & Hobbies">
                  Books, Sports & Hobbies
                </option>
                <option value="Pets">Pets</option>
                <option value="Services">Services</option>
              </select>
            </div>

            {/* Title Input */}
            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter product title"
                className="p-2 border rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Description Input */}
            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Describe your product"
                className="p-2 border rounded-md"
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
            {/* Price Input */}
            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="text"
                id="price"
                placeholder="Enter price in Rupees"
                className="p-2 border rounded-md"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            {/* Location Input */}
            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                className="p-2 border rounded-md"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col">
              <label htmlFor="images" className="font-semibold">
                Upload Images
              </label>
              <input
                type="file"
                id="images"
                className="p-2 border rounded-md"
                onChange={(e) => handleImagePreview(e)}
              />
            </div>

            {/* Image Preview */}
            <div className="mt-4 w-full h-64 border rounded-md overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
