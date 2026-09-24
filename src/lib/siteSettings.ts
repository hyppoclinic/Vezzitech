import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface UnitImages {
  growth?: string;
  experience?: string;
  technology?: string;
  intelligence?: string;
}

const LOCAL_STORAGE_KEY = 'vezzitech_unit_images';

export const getUnitImages = (callback: (images: UnitImages) => void) => {
  // Load initial from localStorage as fallback
  try {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      callback(JSON.parse(cached));
    }
  } catch (err) {
    console.warn('Failed to load unit images from localStorage:', err);
  }

  // Subscribe to Firestore for real-time updates
  const docRef = doc(db, 'site_settings', 'unit_images');
  return onSnapshot(docRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.data() as UnitImages;
      callback(data);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.warn('Failed to save unit images to localStorage:', e);
      }
    } else {
      // Default empty or default initial images
      callback({});
    }
  }, (error) => {
    console.warn('Firestore unit images snapshot warning:', error);
  });
};

export const saveUnitImages = async (images: UnitImages) => {
  // Save locally first for instant reaction
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(images));
  } catch (e) {
    console.warn('localStorage error:', e);
  }

  // Persist in Firestore
  const docRef = doc(db, 'site_settings', 'unit_images');
  await setDoc(docRef, images, { merge: true });
};
