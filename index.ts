import axios from "axios";
const readline = require("readline-sync");
const instance = axios.create({
  baseURL: "https://6443b00490738aa7c075a87b.mockapi.io/appointments/",
});

//#region Options

const options = [
  "Add Appointment",
  "End Appointment",
  "Get Appointment",
  "Get All Appointments",
  "Get Weekly Appointments",
  "Get Todays Appointments",
  "Get All Continuing Appointments",
];

//#endregion

//#region Type

type Appointment = {
  id: number;
  patientName: string;
  doctorName: string;
  startDate: Date;
  endDate: Date;
};

//#endregion

//#region Main Method

Main();
async function Main() {
  let answer = readline.keyInSelect(options);
  answer++;
  switch (answer) {
    case 1:
      await PostAppointment();
      break;
    case 2:
      await EndAppointment();
      break;
    case 3:
      await GetAllAppointments();
      break;
    case 4:
      break;
    // case 5:
    //   await
    //   break;
    // case 0:
    // break;
    default:
      console.log("Select proper answer");
      break;
  }
}

//#endregion

//#region PostAppointment

async function PostAppointment() {
  let startDate = new Date();
  let endDate = new Date();
  let patientName = readline.question("Patient Name: ");
  let doctorName = readline.question("Doctor Name: ");
  startDate = readline.question("Start Date: ");
  endDate = readline.question("End Date: ");
  let data = {
    patientName,
    doctorName,
    startDate,
    endDate,
  };
  let response = await instance.post("", data);
  console.log(response.data);
}

//#endregion

//#region End Appointment

async function EndAppointment() {
  let appointmentId = readline.question("Appointment Id: ");
  let response = await instance.delete(`${appointmentId}`);
  console.log(response.data);
}

//#endregion

//#region Get All Appointments

async function GetAllAppointments() {
  let response = await instance.get("");
  console.log(response.data);
}

//#endregion
