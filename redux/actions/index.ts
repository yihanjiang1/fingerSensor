// index.js

import { 
	fetchOperatorInfo,
	updateOperatorInfo,
	logout,
	setLanguage,
	changeLocation,
	changeEndpoint,
} from './operatorInfoAction';

import { 
	getWaterfallTestMappings,
	uploadFile,
	bulkUploadFile,
	deleteFile,
	renameFile,
	updateEquipment,
	getSummary,
	passAllReadouts,
	markAllOngoing,
} from './timer';


import { 
	initDsnMappings,
	getRealDsn,
	mapRealDsn,
	unmapRealDsn,
	bulkMapRealDsns,
} from './dsnAction';

import { fetchFailcodes, fetchIssueList, createIssue } from './failcodesAction';

import {
	fetchReadout,
	updateReadout,
	setStatusOngoing,
} from './readoutAction';

import { checkUpdate } from './checkUpdateAction';

import { fetchSpeedTestHistory } from './speedHistoryAction';

import {
	setCheckFailures,
	addIssue,
	removeIssue,
	setCheckFailure,
	renameFailureFile,
	uploadFailureFile,
	bulkUploadFailureFile,
	deleteFailureFile,
	listFailureFiles,
} from './checkFailureAction';

export {
	fetchOperatorInfo,
	updateOperatorInfo,
	logout,
	setLanguage,
	changeLocation,
	changeEndpoint,
	// waterfall
	getWaterfallTestMappings,
	uploadFile,
	bulkUploadFile,
	deleteFile,
	renameFile,
	updateEquipment,
	getSummary,
	passAllReadouts,
	markAllOngoing,
	// dsn
	initDsnMappings,
	getRealDsn,
	mapRealDsn,
	unmapRealDsn,
	bulkMapRealDsns,
	// readout
	fetchReadout,
	updateReadout,
	setStatusOngoing,
	// fail codes
	fetchFailcodes,
	fetchIssueList,
	createIssue,
	// updates
	checkUpdate,
	// speed history
	fetchSpeedTestHistory,
	// check failure
	setCheckFailures,
	addIssue,
	removeIssue,
	setCheckFailure,
	renameFailureFile,
	uploadFailureFile,
	bulkUploadFailureFile,
	deleteFailureFile,
	listFailureFiles,
}