"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var readline = require("readline-sync");
var instance = axios_1.default.create({
    baseURL: "https://6443b00490738aa7c075a87b.mockapi.io/appointments/",
});
//#region Options
var options = [
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
//#region Main Method
Main();
function Main() {
    return __awaiter(this, void 0, void 0, function () {
        var answer, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    answer = readline.keyInSelect(options);
                    answer++;
                    _a = answer;
                    switch (_a) {
                        case 1: return [3 /*break*/, 1];
                        case 2: return [3 /*break*/, 3];
                        case 3: return [3 /*break*/, 5];
                        case 4: return [3 /*break*/, 7];
                        case 5: return [3 /*break*/, 9];
                        case 6: return [3 /*break*/, 11];
                        case 7: return [3 /*break*/, 13];
                        case 8: return [3 /*break*/, 15];
                    }
                    return [3 /*break*/, 17];
                case 1: return [4 /*yield*/, PostAppointment()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 3: return [4 /*yield*/, EndAppointment()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 5: return [4 /*yield*/, GetAppointmentById()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 7: return [4 /*yield*/, GetAllAppointments()];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 9: return [4 /*yield*/, GetWeeklyAppointments()];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 11: return [4 /*yield*/, GetTodaysAppointments()];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 13: return [4 /*yield*/, GetAllContuningAppointments()];
                case 14:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 15: return [4 /*yield*/, DeleteAppointment()];
                case 16:
                    _b.sent();
                    return [3 /*break*/, 18];
                case 17:
                    console.log("Select proper answer");
                    return [3 /*break*/, 18];
                case 18: return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region PostAppointment
function PostAppointment() {
    return __awaiter(this, void 0, void 0, function () {
        var patientName, doctorName, promptStartDate, promptEndDate, endDate, startDate, data, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    patientName = readline.question("Patient Name: ");
                    doctorName = readline.question("Doctor Name: ");
                    promptStartDate = readline.question("Start Date: ");
                    promptEndDate = readline.question("End Date: ");
                    endDate = new Date(promptEndDate);
                    startDate = new Date(promptStartDate);
                    data = {
                        patientName: patientName,
                        doctorName: doctorName,
                        startDate: startDate,
                        endDate: endDate,
                    };
                    return [4 /*yield*/, instance.post("", data)];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region End Appointment
function EndAppointment() {
    return __awaiter(this, void 0, void 0, function () {
        var appointmentId, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appointmentId = readline.question("Appointment Id: ");
                    return [4 /*yield*/, instance.delete("".concat(appointmentId))];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region Get All Appointments
function GetAllAppointments() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, instance.get("")];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region Get Appointment By Id
function GetAppointmentById() {
    return __awaiter(this, void 0, void 0, function () {
        var appointmentId, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appointmentId = readline.question("Appointment Id: ");
                    return [4 /*yield*/, instance.get("".concat(appointmentId))];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region Get All Contuning Appointments
function GetAllContuningAppointments() {
    return __awaiter(this, void 0, void 0, function () {
        var response, appointments, filterContuningAppointments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, instance.get("")];
                case 1:
                    response = _a.sent();
                    appointments = response.data;
                    filterContuningAppointments = appointments.filter(function (item) { return !item.endDate; });
                    console.log(filterContuningAppointments);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region Get Weekly Appointments
function GetWeeklyAppointments() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, instance.get("")];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region Get Today's Appointments
function GetTodaysAppointments() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, instance.get("")];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region Delete Appointment
function DeleteAppointment() {
    return __awaiter(this, void 0, void 0, function () {
        var appointmentId, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appointmentId = readline.question("Appointment Id: ");
                    return [4 /*yield*/, instance.delete("".concat(appointmentId))];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/];
            }
        });
    });
}
//#endregion
