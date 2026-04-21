import React from 'react';
import type { FAQItem } from '../types/FAQData';

export const defaultFAQ: FAQItem[] = [
  {
    id: 1,
    question: "¿Como se configura el SDK Agnostiko en mi aplicación Flutter?",
    answer: "Para configurar el SDK, debe añadir la dependencia en su archivo pubspec.yaml y seguir los pasos de vinculación nativa para iOS y Android detallados en la documentación oficial."
  },
  {
    id: 2,
    question: "¿Por qué tras agregar el SDK mi app no compila al hacer 'flutter run'?",
    answer: "Esto suele deberse a conflictos de versiones de dependencias. Asegúrese de limpiar el caché con 'flutter clean' y verificar las versiones de Gradle y CocoaPods."
  },
  {
    id: 3,
    question: "¿Por qué al compilar me da error de 'minSdkVersion 19'?",
    answer: (
      <div>
        <p className="mb-2">El SDK Agnostiko solo compila para dispositivos con Android 5.1 o superior lo cual es equivalente a la API 22 de dicho sistema operativo.</p>
        <p>Para solucionar este error, se debe editar el archivo 'android/app/build.gradle' y cambiar 'minSdkVersion flutter.minSdkVersion' a 'minSdkVersion 22'.</p>
      </div>
    )
  }
];