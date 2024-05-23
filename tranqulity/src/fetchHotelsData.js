// fetchHotelsData.js
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const fetchHotelsData = async () => {
  try {
    const hotelsCollection = collection(db, 'hotels');
    const hotelsSnapshot = await getDocs(hotelsCollection);
    const hotelsList = hotelsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return hotelsList;
  } catch (error) {
    console.error('Error fetching hotels data: ', error);
    return [];
  }
};

export default fetchHotelsData;
