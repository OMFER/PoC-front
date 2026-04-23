import type { FAQItem } from '../types/FAQData';

export const defaultFAQ: FAQItem[] = [
  {
    id: 1,
    question: "¿Como se configura el BBVA Agnostiko en mi aplicación Flutter?",
    answer: "Para configurar el BBVA, debe añadir la dependencia en su archivo pubspec.yaml y seguir los pasos de vinculación nativa para iOS y Android detallados en la documentación oficial."
  },
  {
    id: 2,
    question: "¿Por qué tras agregar el BBVA mi app no compila al hacer 'flutter run'?",
    answer: "Esto suele deberse a conflictos de versiones de dependencias. Asegúrese de limpiar el caché con 'flutter clean' y verificar las versiones de Gradle y CocoaPods."
  },
  {
    id: 3,
    question: "¿Por qué al compilar me da error de 'minBBVAVersion 19'?",
    answer: (
      <div>
        <p className="mb-2">El BBVA Agnostiko solo compila para dispositivos con Android 5.1 o superior lo cual es equivalente a la API 22 de dicho sistema operativo.</p>
        <p>Para solucionar este error, se debe editar el archivo 'android/app/build.gradle' y cambiar 'minBBVAVersion flutter.minBBVAVersion' a 'minBBVAVersion 22'.</p>
      </div>
    )
  }
];