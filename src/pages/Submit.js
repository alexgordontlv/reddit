import React from 'react'
import {IonContent, IonPage} from '@ionic/react'
import LargeHeader from '../components/Header/LargeHeader';
import SmallHeader from '../components/Header/SmallHeader';


const Submit = () => {
    return (
       <IonPage>
         <SmallHeader title='Submit'/>
         <IonContent fullscreen>
            <LargeHeader title='Submit'/>
         </IonContent>
       </IonPage>
    )
}

export default Submit
