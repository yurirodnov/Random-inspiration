import { writable } from 'svelte/store';



export let copyNotificationState = writable<boolean>(false);


export const triggerNotification = () => {
  copyNotificationState.set(true)
  setTimeout(() => { copyNotificationState.set(false) }, 2000)
}