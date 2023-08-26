import {
  DocumentReference,
  QuerySnapshot,
  Unsubscribe,
  collection,
  doc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
import {UserType} from '../../@types/user.type';
import {firestoreDB} from '../../shared/infrastructure/firebase-config';

class UserService {
  private _unsubscribeUsers: Unsubscribe | null = null;

  async getUserById(userId: string): Promise<UserType> {
    try {
      const userRef: DocumentReference = doc(firestoreDB, 'users', userId);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        return docSnap.data() as UserType;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getAllUserFriends(): Promise<UserType[]> {
    try {
      const users: UserType[] = [];
      const usersRef = collection(firestoreDB, 'users');

      const responseSnapshot = await new Promise<QuerySnapshot>(
        (resolve, reject) => {
          this._unsubscribeUsers = onSnapshot(usersRef, resolve, reject);
        },
      );

      const iterate = async () => {
        for (const user of responseSnapshot.docs) {
          users.push({id: user.id, ...user.data()} as UserType);
        }
      };

      await iterate();

      return users;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  stopListeningUserFriends(): void {
    if (this._unsubscribeUsers) {
      this._unsubscribeUsers();
      this._unsubscribeUsers = null;
    }
  }
}

export default new UserService();
