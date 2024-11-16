import { writable } from 'svelte/store';
import { get } from 'svelte/store';


export let copyNotificationState = writable<boolean>(false);


export const triggerNotification = () => {
  copyNotificationState.set(true)
  setTimeout(() => { copyNotificationState.set(false) }, 2000)
  console.log('Trigger working')
}