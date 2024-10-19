import React, { Component, useEffect, useState } from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
function disabledDate(current: any) {
	// Can not select days before today and today
	return current && current < moment().endOf('day');
}
function disabledDateTime() {
	return {
		disabledHours: () => range(0, 24).splice(4, 20),
		disabledMinutes: () => range(30, 60),
		disabledSeconds: () => [55, 56],
	};
}
function range(start: any, end: any) {
	const result = [];
	for (let i = start; i < end; i++) {
		result.push(i);
	}
	return result;
}
interface IState {
	list: {
		id: 1,
		sex: 0 | 1 | 2,
		school: '清华大学'
	}
}

export default () => {
	const now = moment().format('YYYY-MM-DD HH:mm:ss');
	const [diffDate, setDiffDate] = useState<any>();
	useEffect(() => {
		diffTime();
		var ua = navigator.userAgent;
		console.log('ua=====>：', ua);
	}, [])
	// console.log('now=====>：', now);
	// diff(start_date,"seconds");
	const onDateChange = (value: any, value1: any) => {
		console.log('=====>：', value);
		console.log('====value1=>：', value1);
		const diff = value1.diff(now, "seconds");
		console.log('=====>diff：', diff);
	}
	const diffTime = () => {
		let diff: any = ''
		let start_date = moment('2021-02-19 22:29:00')
		let end_date = moment(now);
		diff = moment(start_date.diff(now)).format('YYYY-MM-DD') // 返回毫秒数
		// end_date.diff(start_date, 'months') // 0
		// end_date.diff(start_date, 'weeks') // 1
		// end_date.diff(start_date, 'days') // 7
		// start_date.diff(end_date, 'days') // -7
		console.log('start_date=====>：', start_date);
		console.log('end_date=====>：', end_date);
		console.log('diff=====>：', diff);
		setDiffDate(diff)
	}
	return (
		<>
			<div>{diffDate}</div>
			计算时间差：
			<DatePicker
				format="YYYY-MM-DD HH:mm:ss"
				// disabledDate={disabledDate}
				// disabledTime={disabledDateTime}
				showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
				onChange={onDateChange}
			/>
		</>
	)
}
