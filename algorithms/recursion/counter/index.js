import {LinkedList, LinkedListNode} from '../../helpers/linked-list/linked-list.js';
import { countItems } from './counter.js';

const linkedList = new LinkedList();
linkedList.append(new LinkedListNode(1));
linkedList.append(new LinkedListNode(2));
linkedList.append(new LinkedListNode(3));
linkedList.append(new LinkedListNode(4));
linkedList.append(new LinkedListNode(5));

const result = countItems(linkedList);

console.log({result});