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
  "Delete Appointment",
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
      await GetAppointmentById();
      break;
    case 4:
      await GetAllAppointments();
      break;
    case 5:
      await GetWeeklyAppointments();
      break;
    case 6:
      await GetTodaysAppointments();
      break;
    case 7:
      await GetAllContuningAppointments();
      break;
    case 8:
      await DeleteAppointment();
      break;
    default:
      console.log("Select proper answer");
      break;
  }
}

//#endregion

//#region PostAppointment

async function PostAppointment() {
  let patientName = readline.question("Patient Name: ");
  let doctorName = readline.question("Doctor Name: ");
  let promptStartDate = readline.question("Start Date: ");
  let promptEndDate = readline.question("End Date: ");
  let endDate = new Date(promptEndDate);
  let startDate = new Date(promptStartDate);
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

//#region Get Appointment By Id

async function GetAppointmentById() {
  let appointmentId = readline.question("Appointment Id: ");
  let response = await instance.get(`${appointmentId}`);
  console.log(response.data);
}

//#endregion

//#region Get All Contuning Appointments

async function GetAllContuningAppointments() {
  let response = await instance.get("");
  let appointments = response.data;
  let filterContuningAppointments = appointments.filter(
    (item: { endDate: Date }) => !item.endDate
  );
  console.log(filterContuningAppointments);
}

//#endregion

//#region Get Weekly Appointments

async function GetWeeklyAppointments() {
  let response = await instance.get("");
  console.log(response.data);
}

//#endregion

//#region Get Today's Appointments

async function GetTodaysAppointments() {
  let response = await instance.get("");
  console.log(response.data);
}

//#endregion

//#region Delete Appointment

async function DeleteAppointment() {
  let appointmentId = readline.question("Appointment Id: ");
  let response = await instance.delete(`${appointmentId}`);
  console.log(response.data);
}

//#endregion
