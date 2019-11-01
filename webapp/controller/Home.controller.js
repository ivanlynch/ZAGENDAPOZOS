sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessageToast',
		'sap/ui/core/Fragment'
	],
	function (Controller, JSONModel, MessageToast, Fragment) {
		"use strict";

		return Controller.extend("com.pae.pm.ZAGENDAPOZOS.controller.Home", {

			onInit: function () {
				// create model
				var oModel = new JSONModel();
				oModel.setData({
					startDate: new Date("2017", "10", "13", "8", "0"),
					people: [
						{
							pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
							name: "Bahamonde Dario",
							role: "CUADRILLA1",
							appointments: [
								{
									start: new Date("2017", "10", "17", "00", "00"),
									end: new Date("2017", "10", "17", "24", "00"),
									title: "PO-1143",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "17", "00", "00"),
									end: new Date("2017", "10", "17", "24", "00"),
									title: "PO-1145",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "21", "00", "00"),
									end: new Date("2017", "10", "21", "24", "00"),
									title: "PO-1146",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "21", "00", "00"),
									end: new Date("2017", "10", "21", "24", "00"),
									title: "PO-1147",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "21", "00", "00"),
									end: new Date("2017", "10", "21", "24", "00"),
									title: "PO-1128",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "21", "00", "00"),
									end: new Date("2017", "10", "21", "24", "00"),
									title: "PO-1129",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "23", "00", "00"),
									end: new Date("2017", "10", "23", "24", "00"),
									title: "PO-1130",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "23", "00", "00"),
									end: new Date("2017", "10", "23", "24", "00"),
									title: "PO-1119",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "25", "00", "00"),
									end: new Date("2017", "10", "25", "24", "00"),
									title: "PO-1086",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "25", "00", "00"),
									end: new Date("2017", "10", "25", "24", "00"),
									title: "PO-1083",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "25", "00", "00"),
									end: new Date("2017", "10", "25", "24", "00"),
									title: "PO-1114",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "25", "00", "00"),
									end: new Date("2017", "10", "25", "24", "00"),
									title: "PO-1132",
									type: "Type07",
									pic: "sap-icon://it-host"
								}
							]
						},
						{
							pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
							name: "Blackie Maria",
							role: "CUADRILLA2",
							appointments: [
								{
									start: new Date("2017", "10", "13", "00", "00"),
									end: new Date("2017", "10", "13", "24", "00"),
									title: "PO-1195",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "13", "00", "00"),
									end: new Date("2017", "10", "13", "24", "00"),
									title: "PO.a-1164",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "13", "00", "00"),
									end: new Date("2017", "10", "13", "24", "00"),
									title: "PO-1167",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "14", "00", "00"),
									end: new Date("2017", "10", "14", "24", "00"),
									title: "PO-1166",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "14", "00", "00"),
									end: new Date("2017", "10", "14", "24", "00"),
									title: "PO-1188",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "14", "00", "00"),
									end: new Date("2017", "10", "14", "24", "00"),
									title: "PO-1189",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "15", "00", "00"),
									end: new Date("2017", "10", "15", "24", "00"),
									title: "PO-1191",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "15", "00", "00"),
									end: new Date("2017", "10", "15", "24", "00"),
									title: "PO-1192",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "17", "00", "00"),
									end: new Date("2017", "10", "17", "24", "00"),
									title: "PO-1194",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "17", "00", "00"),
									end: new Date("2017", "10", "17", "24", "00"),
									title: "PO-1165",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "18", "00", "00"),
									end: new Date("2017", "10", "18", "24", "00"),
									title: "PO-1197",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "18", "00", "00"),
									end: new Date("2017", "10", "18", "24", "00"),
									title: "PO-1196",
									type: "Type07",
									pic: "sap-icon://it-host"
								}
								
							]
						},
						{
							pic: "https://viapais.cdncimeco.com/media/cache/resolve/vertical_small/https://viapais.com.ar/files/2019/07/20190704144109_38306915_0_body.jpg",
							name: "Carcamo Antonio",
							role: "CUADRILLA7",
							appointments: [
								{
									start: new Date("2017", "10", "15", "00", "00"),
									end: new Date("2017", "10", "15", "24", "00"),
									title: "PO-1195",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "15", "00", "00"),
									end: new Date("2017", "10", "15", "24", "00"),
									title: "PO.a-1164",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "16", "00", "00"),
									end: new Date("2017", "10", "16", "24", "00"),
									title: "PO-1167",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "16", "00", "00"),
									end: new Date("2017", "10", "16", "24", "00"),
									title: "PO-1166",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "16", "00", "00"),
									end: new Date("2017", "10", "16", "24", "00"),
									title: "PO-1188",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "16", "00", "00"),
									end: new Date("2017", "10", "16", "24", "00"),
									title: "PO-1189",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "16", "00", "00"),
									end: new Date("2017", "10", "16", "24", "00"),
									title: "PO-1191",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "24", "00", "00"),
									end: new Date("2017", "10", "24", "24", "00"),
									title: "PO-1192",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "24", "00", "00"),
									end: new Date("2017", "10", "24", "24", "00"),
									title: "PO-1194",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "24", "00", "00"),
									end: new Date("2017", "10", "24", "24", "00"),
									title: "PO-1165",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "24", "00", "00"),
									end: new Date("2017", "10", "24", "24", "00"),
									title: "PO-1197",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "25", "00", "00"),
									end: new Date("2017", "10", "25", "24", "00"),
									title: "PO-1196",
									type: "Type07",
									pic: "sap-icon://it-host"
								}
								
							]
						},
						{
							pic: "https://www.airnetwifi.es/wp-content/uploads/2016/08/13.jpg",
							name: "Nieva Alejandro",
							role: "CUADRILLA11",
							appointments: [
								{
									start: new Date("2017", "10", "13", "00", "00"),
									end: new Date("2017", "10", "13", "24", "00"),
									title: "PO-1195",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "13", "00", "00"),
									end: new Date("2017", "10", "13", "24", "00"),
									title: "PO.a-1164",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "13", "00", "00"),
									end: new Date("2017", "10", "13", "24", "00"),
									title: "PO-1167",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "14", "00", "00"),
									end: new Date("2017", "10", "14", "24", "00"),
									title: "PO-1166",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "14", "00", "00"),
									end: new Date("2017", "10", "14", "24", "00"),
									title: "PO-1188",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "14", "00", "00"),
									end: new Date("2017", "10", "14", "24", "00"),
									title: "PO-1189",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "15", "00", "00"),
									end: new Date("2017", "10", "15", "24", "00"),
									title: "PO-1191",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "15", "00", "00"),
									end: new Date("2017", "10", "15", "24", "00"),
									title: "PO-1192",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "17", "00", "00"),
									end: new Date("2017", "10", "17", "24", "00"),
									title: "PO-1194",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "17", "00", "00"),
									end: new Date("2017", "10", "17", "24", "00"),
									title: "PO-1165",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "18", "00", "00"),
									end: new Date("2017", "10", "18", "24", "00"),
									title: "PO-1197",
									type: "Type07",
									pic: "sap-icon://it-host"
								},
								{
									start: new Date("2017", "10", "18", "00", "00"),
									end: new Date("2017", "10", "18", "24", "00"),
									title: "PO-1196",
									type: "Type07",
									pic: "sap-icon://it-host"
								}
								
							]
						}
					]
				});
				this.getView().setModel(oModel);

			},
			handleAppointmentSelect: function (oEvent) {
				var oAppointment = oEvent.getParameter("appointment");
				if (oAppointment) {
					this._handleSingleAppointment(oAppointment);
				}
			},
			_handleSingleAppointment: function (oAppointment) {
				if (oAppointment === undefined) {
					return;
				}

				if (!oAppointment.getSelected()) {
					this._oDetailsPopover.close();
					return;
				}

				if (!this._oDetailsPopover) {
					this._oDetailsPopover = Fragment.load({
						id: "myPopoverFrag",
						name: "com.pae.pm.ZAGENDAPOZOS.view.Details",
						controller: this
					}).then(function(oDialog){
						this._oDetailsPopover = oDialog;
						this._setDetailsDialogContent(oAppointment);

					}.bind(this));
				} else {
					this._setDetailsDialogContent(oAppointment);
				}

			},
			
			onAfterRendering: function(){
				this.byId("container-ZAGENDAPOZOS---Home--PC1-Header-ViewSwitch").setVisible(false);	
			},
			roles: {
				donna: "Donna Moore",
				manager: "manager",
				admin: "admin"
			},

			handleRoleChange: function () {
				this.getView().getModel().refresh(true);
			},

			getUserRole: function() {
				return "admin";
			},
			
			_setDetailsDialogContent: function(oAppointment){
				var oTextStart = Fragment.byId("myPopoverFrag", "startDate"),
					oTextEnd = Fragment.byId("myPopoverFrag", "endDate"),
					oAppBindingContext = oAppointment.getBindingContext(),
					oMoreInfo = Fragment.byId("myPopoverFrag", "moreInfo"),
					oDetailsPopover = Fragment.byId("myPopoverFrag","detailsPopover");

				this._oDetailsPopover.setBindingContext(oAppBindingContext);
				this._oDetailsPopover.openBy(oAppointment);

				oTextStart.setText(this.formatDate(oAppointment.getStartDate()));
				oTextEnd.setText(this.formatDate(oAppointment.getEndDate()));
				oMoreInfo.setText(oAppointment.getText());
				oDetailsPopover.setTitle(oAppointment.getTitle());
			},

			canModifyAppointments: function(sRole) {
				var sUserRole = this.getUserRole();

				if (sUserRole === this.roles.manager || sUserRole === this.roles.admin || sUserRole === sRole) {
					return true;
				}
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
			}

		});

	});
