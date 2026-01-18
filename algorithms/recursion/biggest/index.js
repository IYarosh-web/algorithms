import {LinkedList} from '../../helpers/linked-list/linked-list.js';
import { findBiggest } from './biggest.js';

const linkedList = new LinkedList();
linkedList.append(0);
linkedList.append(6);
linkedList.append(2);
linkedList.append(1);
linkedList.append(5);

const result = findBiggest(linkedList);

console.log({result});