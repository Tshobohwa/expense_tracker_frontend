const formatTime = (timestampString) => {
  const date = new Date(timestampString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

export default formatTime;
