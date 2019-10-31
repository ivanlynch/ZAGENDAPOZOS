sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessageToast'
	],
	function (Controller, JSONModel, MessageToast) {
		"use strict";

		return Controller.extend("com.pae.pm.ZAGENDAPOZOS.controller.Home", {

			onInit: function () {
				// create model
				var oModel = new JSONModel();
				oModel.setData({
					startDate: new Date("2019", "11", "04", "8", "0"),
					people: [
						{
							name: "Bahamonde Dario",
							appointments: [
								{
									start: new Date("2019", "11", "04", "08", "00"),
									end: new Date("2019", "11", "04", "09", "10"),
									title: "PO-1143",
									info: "RUT-BES-POZO PO-1143",
									type: "Type07",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "09", "00"),
									end: new Date("2019", "11", "04", "10", "20"),
									title: "PO-1145",
									info: "RUT-BES-POZO PO-1145",
									type: "Type01",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "10", "00"),
									end: new Date("2019", "11", "04", "11", "30"),
									title: "Sync Bill",
									info: "Online",
									type: "Type01",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "11", "00"),
									end: new Date("2019", "11", "04", "12", "40"),
									title: "Check Flights",
									info: "no room",
									type: "Type09",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "12", "00"),
									end: new Date("2019", "11", "04", "13", "50"),
									title: "Lunch",
									info: "canteen",
									type: "Type05",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "13", "00"),
									end: new Date("2019", "11", "04", "15", "10"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type01",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "14", "00"),
									end: new Date("2019", "11", "04", "15", "30"),
									title: "Deadline",
									type: "Type01",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "15", "00"),
									end: new Date("2019", "11", "04", "16", "00"),
									title: "Blocker",
									info: "room 6",
									type: "Type01",
									pic: "sap-icon://it-instance"
								},
								{
									start: new Date("2019", "11", "04", "16", "00"),
									end: new Date("2019", "11", "04", "17", "60"),
									title: "Boss Birthday",
									type: "Type01",
									pic: "sap-icon://it-instance"
								}
							]
						},
						{
							name: "Donna Moore",
							role: "team member",
							appointments: [
								{
									start: new Date("2017", "10", "13", "08", "00"),
									end: new Date("2017", "10", "13", "09", "26"),
									title: "Team sync",
									info: "Canteen",
									type: "Type07",
									pic: "sap-icon://family-care"
								},
								{
									start: new Date("2017", "10", "13", "10", "00"),
									end: new Date("2017", "10", "13", "12", "00"),
									title: "Sync John",
									info: "Online",
									type: "Type03"
								},
								{
									start: new Date("2017", "10", "13", "11", "00"),
									end: new Date("2017", "10", "13", "12", "00"),
									title: "Prep for planning",
									info: "room 5",
									type: "Type01",
									pic: "sap-icon://family-care"
								},
								{
									start: new Date("2017", "10", "13", "18", "00"),
									end: new Date("2017", "10", "13", "20", "00"),
									title: "Check Flights",
									info: "no room",
									type: "Type09",
									pic: "sap-icon://flight"
								},
								{
									start: new Date("2017", "10", "13", "18", "00"),
									end: new Date("2017", "10", "13", "20", "00"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type04"
								},
								{
									start: new Date("2017", "10", "20", "01", "00"),
									end: new Date("2017", "10", "20", "23", "00"),
									title: "Planning",
									type: "Type09"
								},
								{
									start: new Date("2018", "2", "20", "01", "00"),
									end: new Date("2018", "2", "20", "23", "00"),
									title: "Off",
									type: "Type08"
								}
							]
						}
					]
				});
				this.getView().setModel(oModel);

			},

			roles: {
				donna: "Donna Moore",
				manager: "manager",
				admin: "admin"
			},

			handleRoleChange: function () {
				this.getView().getModel().refresh(true);
			},

			canModifyAppointments: function(sRole) {
				return true;
			},

			handleAppointmentDragEnter: function(oEvent) {
				if (this.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
					oEvent.preventDefault();
				}
			},

			handleAppointmentDrop: function (oEvent) {
				var oAppointment = oEvent.getParameter("appointment"),
					oStartDate = oEvent.getParameter("startDate"),
					oEndDate = oEvent.getParameter("endDate"),
					oCalendarRow = oEvent.getParameter("calendarRow"),
					bCopy = oEvent.getParameter("copy"),
					oModel = this.getView().getModel(),
					oAppBindingContext = oAppointment.getBindingContext(),
					oRowBindingContext = oCalendarRow.getBindingContext(),
					handleAppointmentDropBetweenRows = function () {
						var aPath = oAppBindingContext.getPath().split("/"),
							iIndex = aPath.pop(),
							sRowAppointmentsPath = aPath.join("/");

						oRowBindingContext.getObject().appointments.push(
							oModel.getProperty(oAppBindingContext.getPath())
						);

						oModel.getProperty(sRowAppointmentsPath).splice(iIndex, 1);
					};

				if (bCopy) { // "copy" appointment
					var oProps = jQuery.extend({}, oModel.getProperty(oAppointment.getBindingContext().getPath()));
					oProps.start = oStartDate;
					oProps.end = oEndDate;

					oRowBindingContext.getObject().appointments.push(oProps);
				} else { // "move" appointment
					oModel.setProperty("start", oStartDate, oAppBindingContext);
					oModel.setProperty("end", oEndDate, oAppBindingContext);

					if (oAppointment.getParent() !== oCalendarRow) {
						handleAppointmentDropBetweenRows();
					}
				}

				oModel.refresh(true);

				MessageToast.show(oCalendarRow.getTitle() + "'s '" + "Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");
			},

			handleAppointmentResize: function (oEvent) {
				var oAppointment = oEvent.getParameter("appointment"),
					oStartDate = oEvent.getParameter("startDate"),
					oEndDate = oEvent.getParameter("endDate");

				if (!this.isAppointmentOverlap(oEvent, oAppointment.getParent())) {
					MessageToast.show("Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");

					oAppointment
						.setStartDate(oStartDate)
						.setEndDate(oEndDate);
				} else {
					MessageToast.show("As a manager you can not resize events if they overlap with another events");
				}
			},

			handleAppointmentCreate: function (oEvent) {
				var oStartDate = oEvent.getParameter("startDate"),
					oEndDate = oEvent.getParameter("endDate"),
					oPlanningCalendarRow = oEvent.getParameter("calendarRow"),
					oModel = this.getView().getModel(),
					sPath = oPlanningCalendarRow.getBindingContext().getPath();

				oModel.getProperty(sPath).appointments.push({
					title: "New Appointment",
					start: oStartDate,
					end: oEndDate
				});

				MessageToast.show("New Appointment is created at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");

				oModel.refresh(true);
			},

			isAppointmentOverlap: function (oEvent, oCalendarRow) {
				var oAppointment = oEvent.getParameter("appointment"),
					oStartDate = oEvent.getParameter("startDate"),
					oEndDate = oEvent.getParameter("endDate"),
					bAppointmentOverlapped;

				if (this.getUserRole() === this.roles.manager) {
					bAppointmentOverlapped = oCalendarRow.getAppointments().some(function (oCurrentAppointment) {
						if (oCurrentAppointment === oAppointment) {
							return;
						}

						var oAppStartTime = oCurrentAppointment.getStartDate().getTime(),
							oAppEndTime = oCurrentAppointment.getEndDate().getTime();

						if (oAppStartTime <= oStartDate.getTime() && oStartDate.getTime() < oAppEndTime) {
							return true;
						}

						if (oAppStartTime < oEndDate.getTime() && oEndDate.getTime() <= oAppEndTime) {
							return true;
						}

						if (oStartDate.getTime() <= oAppStartTime && oAppStartTime < oEndDate.getTime()) {
							return true;
						}
					});
				}

				return bAppointmentOverlapped;
			}}
			
			//Agregar el HandleSingleSelectAppointment

		});

	});
