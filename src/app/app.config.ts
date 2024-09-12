import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'sala-de-juegos-friadenrich',
        appId: '1:637721224566:web:f2719815edf87614f3c657',
        storageBucket: 'sala-de-juegos-friadenrich.appspot.com',
        apiKey: 'AIzaSyAUoDDry11fqAtEcFeV80KdfgN1T90AMnU',
        authDomain: 'sala-de-juegos-friadenrich.firebaseapp.com',
        messagingSenderId: '637721224566',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
