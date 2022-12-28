import React, { useEffect, useState, memo, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './chart.module.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Axios from 'axios';


const cx = classNames.bind(styles);


function Chart({ title, AddClass }) {

    

    var today = new Date();
    var today1 = new Date();
    var today2 = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    const weekNumber = useMemo(() => {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        var days = Math.floor((currentDate - startDate) /
            (24 * 60 * 60 * 1000));
          
    const weekNumber1 = Math.ceil(days / 7);

    return weekNumber1
    },[])

    function dayofweek(d, m, y)
    {
        let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
        y -= (m < 3) ? 1 : 0;
        return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
    }


	let day = dayofweek(today.getDate(), today.getMonth()+1, today.getFullYear());
	var dayWeek = (Math.round(day));

    if((Math.round(day)) !== 1)
    {
        today.setDate(today.getDate() - (dayWeek - 1));
        var subDay = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    
        var subCurrentDayOfWeek = 7 - dayWeek;
    
        today1.setDate(today1.getDate() + ((dayWeek - 1) - subCurrentDayOfWeek));
        // var plusDay = today1.getDate()+'-'+(today1.getMonth()+1)+'-'+today1.getFullYear();
    }
    else
    {
        subDay = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        today2.setDate(today2.getDate() + (dayWeek - 1));
        // var plusDay = today2.getDate()+'-'+(today2.getMonth()+1)+'-'+today2.getFullYear();
    }


    const [quantityUser, setQuantityUser] = useState(0);

    const [quantityUnPaid, setQuantityUnpaid] = useState(0);

    const Working = quantityUser - quantityUnPaid;


    const data = [
        {
            date: date,
            Paid: quantityUnPaid,
            Working: Working,
        },
      ];

      const [mondayChange, setMondayChange] = useState();

    //   const Monday = new Date(subDay);

    //   const Monday1 = new Date(Monday.setDate(Monday.getDate() + 1));

    //   const Monday2 = Monday1.getDate()+'-'+(Monday1.getMonth()+1)+'-'+Monday1.getFullYear();


      useEffect(() => {
         Axios.get(`/getCountUserDay?day=${subDay}`).then((value) => {
            setMondayChange(value.data[0].upPaid);
         })

      },[subDay])
      

      const [tuesdayChange, setTuesdayChange] = useState();

      const tuesday = new Date(subDay);

      const tuesday1 = new Date(tuesday.setDate(tuesday.getDate() + 1));

      const tuesday2 = tuesday1.getDate()+'-'+(tuesday1.getMonth()+1)+'-'+tuesday1.getFullYear();


      useEffect(() => {
         Axios.get(`/getCountUserDay?day=${tuesday2}`).then((value) => {
            setTuesdayChange(value.data[0].upPaid);
         })

      },[tuesday2])

     

      const [wednesdayChange, setWednesdayChange] = useState();

      const wednesday = new Date(subDay);

      const wednesday1 = new Date(wednesday.setDate(wednesday.getDate() + 2));

      const wednesday2 = wednesday1.getDate()+'-'+(wednesday1.getMonth()+1)+'-'+wednesday1.getFullYear();


      useEffect(() => {
         Axios.get(`/getCountUserDay?day=${wednesday2}`).then((value) => {
            setWednesdayChange(value.data[0].upPaid);
         })

      },[wednesday2])

     
      
      const [thursdayChange, setThursdayChange] = useState();

      const thursday = new Date(subDay);

      const thursday1 = new Date(thursday.setDate(thursday.getDate() + 3));

      const thursday2 = thursday1.getDate()+'-'+(thursday1.getMonth()+1)+'-'+thursday1.getFullYear();


      useEffect(() => {
         Axios.get(`/getCountUserDay?day=${thursday2}`).then((value) => {
            setThursdayChange(value.data[0].upPaid);
         })

      },[thursday2])

      

      const [fridayChange, setFridayChange] = useState();

      const friday = new Date(subDay);

      const friday1 = new Date(friday.setDate(friday.getDate() + 4));

      const friday2 = friday1.getDate()+'-'+(friday1.getMonth()+1)+'-'+friday1.getFullYear();


      useEffect(() => {
         Axios.get(`/getCountUserDay?day=${friday2}`).then((value) => {
            setFridayChange(value.data[0].upPaid);
         })

      },[friday2])





      const [saturdayChange, setSaturdayChange] = useState();

      const saturday = new Date(subDay);

      const saturday1 = new Date(saturday.setDate(saturday.getDate() + 5));

      const saturday2 = saturday1.getDate()+'-'+(saturday1.getMonth()+1)+'-'+saturday1.getFullYear();


      useEffect(() => {
         Axios.get(`/getCountUserDay?day=${saturday2}`).then((value) => {
            setSaturdayChange(value.data[0].upPaid);
         })

      },[saturday2])




      function WorkingSub(paid, sumUser)
      {
          return (sumUser - paid);
      }


      const dataWeek = [
        {
            date: `Mon`,
            Paid: mondayChange,
            Working: WorkingSub(mondayChange, quantityUser),
        },
        date >= tuesday2 ?
        {
            date: `Tue`,
            Paid: tuesdayChange,
            Working: WorkingSub(tuesdayChange, quantityUser),
        } : {},
        date >= wednesday2 ?
        {
            date: `Wed`,
            Paid: wednesdayChange,
            Working: WorkingSub(wednesdayChange, quantityUser),
        } : {},
        date >= thursday2 ?
        {
            date: `Thur`,
            Paid: thursdayChange,
            Working: WorkingSub(thursdayChange, quantityUser),
        } : {},
        date >= friday2 ?
        {
            date: `Fri`,
            Paid: fridayChange,
            Working: WorkingSub(fridayChange, quantityUser),
        } : {},
        date >= saturday2 ?
        {
            date: `Sat`,
            Paid: saturdayChange,
            Working: WorkingSub(saturdayChange, quantityUser),
        } : {},
      ];

    useEffect(() => {
        Axios.get("/getCountUser").then((value) => {
           setQuantityUser(value.data[0].count);
        })
     },[]);
 
     useEffect(() => {
        Axios.get("/getUnPaid").then((value) => {
         setQuantityUnpaid(value.data[0].upPaid);
        })
     },[])


    return <>
        {
            !AddClass ? 

            <div className={cx('item-chart', AddClass)}>
            <div className={cx('chart-container')}>
                    <div className={cx('chart-title')}>
                    <p>{title}</p>
                    </div>
                    <div className={cx('chart-item')}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"  />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            interval={0}
                            height={1}
                            scale="band"
                        />
 
                        <YAxis type="number" domain={[0, 10]}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Working" fill="#8884d8" />
                        <Bar dataKey="Paid" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
            </div>
        </div>
        :
    <div className={cx('item-chart', AddClass)}>
        <div className={cx('chart-container')}>
                <div className={cx('chart-title')}>
                <p>{title} {weekNumber}</p>
                </div>
                <div className={cx('chart-item')}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width={500}
                    height={300}
                    data={dataWeek}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"  />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        interval={0}
                        height={1}
                        scale="band"
                    />
                    <YAxis type="number" domain={[0, 10]}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Working" fill="#8884d8" />
                    <Bar dataKey="Paid" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
                </div>
        </div>
    </div>
        }
    </>
}

export default memo(Chart);
    