// index.js

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import {
	fetchOperatorInfoEpic,
	updateOperatorInfoEpic,
	logoutEpic,
} from '../actions/operatorInfoAction';

import {
	getWaterfallTestMappingsEpic,
	uploadFileEpic,
	bulkUploadFileEpic,
	deleteFileEpic,
	renameFileEpic,
	updateEquipmentEpic,
	getSummaryEpic,
	refreshWaterfallEpic,
	passAllReadoutsEpic,
	markAllOngoingEpic,
} from '../actions/timer';

import {
	mapRealDsnEpic,
	unmapRealDsnEpic,
	bulkMapRealDsnEpic,
} from '../actions/dsnAction';

import {
	fetchReadoutEpic,
	updateReadoutEpic,
	setStatusOngoingEpic,
} from '../actions/readoutAction';

import { fetchFailcodesEpic, fetchIssueListEpic, createIssueEpic } from '../actions/failcodesAction';
import { checkUpdateEpic } from '../actions/checkUpdateAction';

import { fetchSpeedTestHistoryEpic } from '../actions/speedHistoryAction';

import {
	renameFailureFileEpic,
	uploadFailureFileEpic,
	bulkUploadFailureFileEpic,
	deleteFailureFileEpic,
	listFailureFilesEpic,
} from '../actions/checkFailureAction'


import operatorInfo from './operatorInfoReducer';
import waterfallMappings from './waterfallMappingsReducer';
import dsn from './dsnReducer';
import readout from './readoutReducer';
import failcodes from './timer';
import update from './checkUpdateReducer';
import speed from './speedHistoryReducer';
import checkFailure from './checkFailureReducer';


export const rootEpic = combineEpics(
	// operator
	fetchOperatorInfoEpic,
	updateOperatorInfoEpic,
	logoutEpic,
	// dsn
	mapRealDsnEpic,
	unmapRealDsnEpic,
	bulkMapRealDsnEpic,
	// waterfall
	uploadFileEpic,
	bulkUploadFileEpic,
	renameFileEpic,
	deleteFileEpic,
	updateEquipmentEpic,
	getWaterfallTestMappingsEpic,
  passAllReadoutsEpic,
  refreshWaterfallEpic,
	getSummaryEpic,
	markAllOngoingEpic,
	// readout
	fetchReadoutEpic,
	updateReadoutEpic,
	setStatusOngoingEpic,
	// failcodes
	fetchFailcodesEpic,
	fetchIssueListEpic,
	createIssueEpic,
	// check update
	checkUpdateEpic,
	// speed
	fetchSpeedTestHistoryEpic,
	// check failure,
	renameFailureFileEpic,
	uploadFailureFileEpic,
	bulkUploadFailureFileEpic,
	deleteFailureFileEpic,
	listFailureFilesEpic,
)

export const rootReducer = combineReducers({
	operatorInfo,
	waterfallMappings,
	dsn,
	readout,
	failcodes,
	update,
	speed,
	checkFailure,
})