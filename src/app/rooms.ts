export interface Rooms {
    totalRooms: number
    availableRooms: number
    bookedRooms:number
}

export interface RoomsDetails {
    roomType:string
    price: number
    description:string
    checkin_Time: Date
    checkout_Time: Date
}
