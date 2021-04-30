import classNames from 'classnames';
import React from 'react'
import { useForm } from 'react-hook-form';

const getDimensions = async (file) => {
  let reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);

    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    }

    reader.onload = () => {
      const image = new Image();
      image.src = reader.result;
      console.log(reader);
      image.onload = function () {
        console.log(this)
        const { width, height } = this;
        resolve({ width, height })
      }
    }
  })

}

const ImageForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const onSubmit = data => console.log(data);

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Upload Images</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="custom-file mb-3">
            <input
              type="file"
              className={classNames("custom-file-input", {
                "is-invalid": errors.profile
              })}
              id="validatedCustomFile"
              {...register("profile", {
                required: "this field is required.",
                validate: async (value) => {
                  const validFileTypes = ["jpg", 'png', 'jpeg'];
                  const fileType = value[0].name.split(".")[1];

                  if (!validFileTypes.includes(fileType)) {
                    return `Please select valid image type(${validFileTypes})`
                  }

                  const { width, height } = await getDimensions(value[0]);
                  if (width > 1000 && height > 1000) {
                    return "Image width and height must be less than or equal to 1000px";
                  }
                  console.log(width, height)

                  const fileSize = Math.round(value[0].size / 1024);
                  if (fileSize > 500) {
                    return "file size must be lower than 500kb";
                  }
                }
              })}
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              Choose file...
            </label>
            {errors.profile && (
              <div className="invalid-feedback">{errors.profile.message}</div>
            )}
          </div>
          <button className="btn btn-primary" type="submit">
            Upload Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default ImageForm
