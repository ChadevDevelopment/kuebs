// import { NextResponse, NextRequest } from 'next/server';
// import { Server as NetServer } from 'http';
// import { Server as SocketIOServer } from 'socket.io';

// // Typ für Next.js-API-Antwort mit Socket.IO
// export type NextApiResponseServerIO = NextResponse & {
//   socket: {
//     server: NetServer & {
//       io: SocketIOServer;
//     };
//   };
// };

// // Typ für den Socket.IO-Handler
// export type SocketHandler = (req: NextRequest, res: NextApiResponseServerIO) => NextResponse | Promise<NextResponse>;