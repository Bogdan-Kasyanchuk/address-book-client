const loadAvatarService = (event, setFileAvatar, setImagePreview) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  setFileAvatar(file);
  reader.onload = () => {
    setImagePreview(reader.result);
  };
  reader.readAsDataURL(file);

  return;
};

export default loadAvatarService;
