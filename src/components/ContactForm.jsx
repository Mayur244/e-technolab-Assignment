import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data); 
    alert('Form submitted successfully!'); 
    reset(); 
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-1">
        <div className="bg-white px-120 py-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-pink-500 mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                {...register('mobile', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Mobile number must be 10 digits',
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your mobile number"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;