import {writable} from 'svelte/store'

// 구독을 하면 2번째 인자가 실행
export let count = writable(0, ()=>{
    console.log('count 구독자가 1명 이상일 때!')
    return () => {
        console.log('count 구독자가 0명일 때')
    }
})

export let name = writable('Heropy')