var users = {
  person: {
    full_name: "Cristiano Ronaldo",
    short_name: "C.Ronaldo",
    nickname: "cr",
  },
  images: {
    person: {
      cr_1: require("./assets/picture/person/cr_1.jpg"),
      cr_2: require("./assets/picture/person/cr_2.jpg"),
      cr_3: require("./assets/picture/person/cr_3.jpg"),
      cr_4: require("./assets/picture/person/cr_4.jpg"),
    },
    buttons: {
      accept_video_button: require("./assets/picture/buttons/accept_video_button.png"),
      camera_rotate_button: require("./assets/picture/buttons/camera_rotate_button.png"),
      mute_button: require("./assets/picture/buttons/mute_button.png"),
      reject_button: require("./assets/picture/buttons/reject_button.png"),
    },
  },
  videos: {
    person: {
      cr_1: require("./assets/video/person/cr_1.mp4"),
      cr_2: require("./assets/video/person/cr_2.mp4"),
      cr_3: require("./assets/video/person/cr_3.mp4"),
      cr_4: require("./assets/video/person/cr_4.mp4"),
    },
  },
  ringtone: {
    video_call: require("./assets/ringtone/ringtone_whatsapp_video_call.mp3"),
  },
};

export default users;
