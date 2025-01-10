function Popup({ message, onClose }) {
    return (
      <div className="fixed  left-10 z-10"> {/* Adjust position to the left side */}
        <div className="bg-transparent border border-red-500 p-6 rounded shadow-lg text-white"> {/* Transparent background and red border */}
          <h2 className="text-lg font-bold mb-4">Info</h2>
          <p>{message}</p>
          <button 
            onClick={onClose} // Calls the onClose function when clicked
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200"
          >
            OK
          </button>
        </div>
      </div>
    );
  }
  
  export default Popup;
  