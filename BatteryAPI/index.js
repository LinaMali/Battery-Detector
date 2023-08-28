const batteryLevel= document.querySelector(".batteryLevel");
const batteryCharging=document.querySelector(".batteryCharging");
const batteryChargingTime= document.querySelector(".batteryChargingTime");
const batteryDisChargingTime= document.querySelector(".batteryDisChargingTime");
const battery=()=>{
    if("getBattery" in navigator){
        navigator.getBattery().then((battery)=>{
            function updateAllBatteryDetails(){
                updateChangingInfo();
                updateChangingTimeChangeInfo();
                updateDisChangingTimeChangeInfo();
                updateLevelChnage();
            }
            updateAllBatteryDetails();
            // //battery charging change
        battery.addEventListener("chargingchange",()=>{
    
            updateChangingInfo();
        });
        function updateChangingInfo(){
            const isCharging=battery.charging ? "yes" : "no";
         batteryCharging.innerHTML=isCharging;
        }
        // battery charging time
        battery.addEventListener("chargingtimechange",()=>{
              updateChangingTimeChangeInfo();
        });
        function updateChangingTimeChangeInfo(){
            batteryChargingTime.innerHTML=battery.chargingTime + " second";
        }
         // battery discharging time
        battery.addEventListener("dischargingtimechange",()=>{
            updateDisChangingTimeChangeInfo();
        });
        function updateDisChangingTimeChangeInfo(){
            batteryDisChargingTime.innerHTML=battery.dischargingTime + " second";
        };
        //battery level change
        battery.addEventListener("levelchange",()=>{
            updateLevelChnage();
        });
        function updateLevelChnage(){
            const level= battery.level * 100 + "%";
            batteryLevel.innerHTML=level;
        };
        });
    };
};
battery();