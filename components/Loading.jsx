const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center space-x-4">
        <div className="w-6 h-6 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
