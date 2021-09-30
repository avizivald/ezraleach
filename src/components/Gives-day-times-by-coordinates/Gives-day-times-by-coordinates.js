import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getZmanimJson } from "kosher-zmanim";

import SelectPlacesFromGoogle from '../select-places-from-google/select-places-from-google';
// let fs = require('browserify');









export default function GivesDayTimesByCoordinates(props) {

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [zmanim, setZmanim] = useState({});
    // const [finishRefreshZmanim, setFinishRefreshZmanim] = useState([]);
    const [zmanimInfo, setZmanimInfo] = useState([])

    const [zmaneyHayom, setZmaneyHayom] = useState([]);
    let onSelect = async (newCoordinates) => {
        console.log(newCoordinates);
        // setZmanimInfo([])
        // setZmaneyHayom([])
        await setCoordinates(newCoordinates)
    }
    let saveZmanim = async (data) => {
        await setZmanim(data);
        console.log('saveZmanim f', zmanim);
        // fs.writeFile('./textFiles/zmanim.txt', data, function(err) {
        //     fs.readFile('./textFiles/zmanim.txt', function(err, contents) {
        //       console.log(contents.toString());
        //     });
        //   });
        // fs.writeFile('./textFiles/zmanim.txt', data, function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        // });
    }
    let RefreshZmanimFunc = async () => {
        function setObjInfoByChange(e) {
            setZmanimInfo(oldArray => [...oldArray, e]);
            // console.log('objInfo ', zmanimInfo);
        }
        let list = [
            "AlosHashachar",
            "Misheyakir11Point5Degrees",
            "Sunrise",
            "SofZmanShmaMGA16Point1Degrees",
            "SofZmanShmaGRA",
            "Chatzos",
            "MinchaGedola30Minutes",
            "PlagHamincha",
            "Sunset",
            "Tzais",
            "Tzais72",
        ]

        if (Object.keys(zmanim).length !== 0) {
            let cuont = 0;
            // console.log('zmanim ', zmanim);
            for (const [keyFromZmanim, value] of Object.entries(zmanim.Zmanim)) {
                if (list.includes(keyFromZmanim)) {
                    let current = moment(zmanim.Zmanim[keyFromZmanim]);
                    // let aa = [...zmaneyHayom];
                    // console.log('aa ', aa);
                    // aa.push({ [keyFromZmanim]: current.format("hh:mm a") })
                    // console.log('aa ', aa);
                    // await setZmaneyHayom(aa);
                    await setZmaneyHayom([...zmaneyHayom, keyFromZmanim, current.format("hh:mm a")]);
                    console.log('zmaneyHayom   ', zmaneyHayom);
                } else {
                }
                var result = moment(value);
                setObjInfoByChange(<p>{`${cuont}  = ${keyFromZmanim}: ${result.format("hh:mm a")}`}</p>)
                cuont++;
                // console.log(`${keyFromZmanim}: ${result.format("hh:mm a")}`);
            }
        }
        // setFinishRefreshZmanim([])
    }
    useEffect(() => {
        RefreshZmanimFunc();
    }, [zmanim]);
    // useEffect(() => {
    //     console.log('await props.changeZmanimL ist (zmaneyHayom)\n',zmaneyHayom);
    //      props.changeZmanimList(zmaneyHayom)
    // }, [finishRefreshZmanim]);
    useEffect(() => {
        if (coordinates.lng !== null) {
            let getzmanimFanc = async () => {
                var objdatetime = new Date();

                // console.log('ComplexZmanimCalendar ',new ComplexZmanimCalendar(`location=${coordinates.lat},${coordinates.lng}`));

                let timestamp = await new Date().getTime();
                let timestampInSeconds = Math.round(timestamp / 1000);
                // console.log('timestamp', timestamp);
                // console.log('timestampInSeconds', timestampInSeconds);
                // console.log('coordinates.lat,coordinates.lng', coordinates.lat, coordinates.lng);
                await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates.lat},${coordinates.lng}&timestamp=${timestampInSeconds}&key=AIzaSyDXlGkNJCMPb1QFH_sCeFSkq0QywT88in0`)
                    .then(response => response.json())
                    .then(data => saveZmanim(getZmanimJson(
                        {
                            "date": objdatetime,
                            "latitude": coordinates.lat,
                            "longitude": coordinates.lng,
                            "timeZoneId": data.timeZoneId,
                            "complexZmanim": true
                        })));
                // zmanim.BasicZmanim


            }
            getzmanimFanc();
        }
    }, [coordinates]);
    return (<section className="section1">
        <SelectPlacesFromGoogle onSelect={onSelect} />
        {zmanimInfo}
    </section>

    );
}
