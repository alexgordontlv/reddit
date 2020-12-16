import React from 'react'
import {IonHeader, ionHeader, IonTitle, IonToolbar} from '@ionic/react';


const SmallHeader = ({title}) => {
    return (
        <IonHeader collapse="condense">
            <IonToolbar style={{background: "#cc4d29"}} color="primary">
                <IonTitle size="large">{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default SmallHeader
