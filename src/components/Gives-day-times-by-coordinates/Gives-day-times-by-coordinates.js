import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getZmanimJson } from "kosher-zmanim";
import AnimateEarth from '../../pages/Animate/AnimateEarth';
import ZmanimCard from "../zmanim-card/zmanim-card";
import SelectPlacesFromGoogle from '../select-places-from-google/select-places-from-google';
import './Gives-day-times-by-coordinates.scss'

export default function GivesDayTimesByCoordinates(props) {

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });
    const [zmanim, setZmanim] = useState({});

    const [zmaneyHayom, setZmaneyHayom] = useState([]);
    let onSelect = async (newCoordinates) => {
        await setCoordinates(newCoordinates)
    }
    let saveZmanim = async (data) => {
        await setZmanim(data);
    }
    let RefreshZmanimFunc = async () => {
        let list = [
            "AlosHashachar", "עלות השחר",
            "Misheyakir11Point5Degrees", "זמן טלית",
            "Sunrise", "נץ החמה",
            "SofZmanShmaMGA16Point1Degrees", ` סוזק"ש מג"א`,
            "SofZmanShmaGRA", ` סוזק"ש הגר"א`,
            "Chatzos", "חצות",
            "MinchaGedola30Minutes", "מנחה גדולה",
            "PlagHamincha", "פלג המנחה",
            "Sunset", "שקיעת החמה",
            "Tzais", "צאת הכוכבים",
            "Tzais72", `ר"ת`
        ]
        if (Object.keys(zmanim).length !== 0) {
            for (const [keyFromZmanim, value] of Object.entries(zmanim.Zmanim)) {
                if (list.includes(keyFromZmanim)) {
                    let current = moment(zmanim.Zmanim[keyFromZmanim]);
                    await setZmaneyHayom(zmaneyHayomArray => [...zmaneyHayomArray, [list[list.indexOf(keyFromZmanim) + 1], current.format("hh:mm a")]]);
                } else {
                }
            }
        }
    }
    useEffect(async () => {
        await setZmaneyHayom([])
        RefreshZmanimFunc();
    }, [zmanim]);

    useEffect(() => {
        if (coordinates.lng !== null) {
            let getzmanimFanc = async () => {
                var objdatetime = new Date();
                let timestamp = await new Date().getTime();
                let timestampInSeconds = Math.round(timestamp / 1000);
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
            }
            getzmanimFanc();
        }
    }, [coordinates]);
    return (<section className="section1">
        <AnimateEarth anim={true} />

        <h1 className="times-header">אין לסמוך על הזמנים בדקדוק ויש להוסיף 4 דקות לחומרא</h1>
        <SelectPlacesFromGoogle onSelect={onSelect} />
        <div className="times-box">
            {zmaneyHayom.map(zman => <ZmanimCard key={zman} name={zman[0]} time={zman[1]} />)}
        </div>
    </section>

    );
}
