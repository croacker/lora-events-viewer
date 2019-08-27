

class Lw360hrService {
  dataToEntity(buf: Buffer): Lw360hrData {
    var ent = new Lw360hrData();
    const protocolVersion = buf.slice(0, 1).reverse()
    console.log(`protocolVersion = ${(protocolVersion as Buffer).toString('hex')}`);

    const commandId = buf.slice(1, 3).reverse()
    console.log(`commandId = ${(commandId as Buffer).toString('hex')}`);

    const longitude = buf.slice(3, 7).reverse()
    console.log(`longitude = ${(longitude as Buffer).toString('hex')}`);

    const latitude = buf.slice(7, 11).reverse()
    console.log(`latitude = ${(latitude as Buffer).toString('hex')}`);

    const gpsFixStatus = buf.slice(11, 12).reverse()
    console.log(`gpsFixStatus = ${(gpsFixStatus as Buffer).toString('hex')}`);

    const reserve = buf.slice(12, 13).reverse()
    console.log(`reserve = ${(reserve as Buffer).toString('hex')}`);

    const calorie = buf.slice(13, 15).reverse()
    console.log(`calorie = ${(calorie as Buffer).toString('hex')}`);

    const batteryCapacity = buf.slice(15, 16).reverse()
    console.log(`batteryCapacity = ${(batteryCapacity as Buffer).toString('hex')}`);

    const dateTime = buf.slice(16, 20).reverse()
    console.log(`dateTime = ${(dateTime as Buffer).toString('hex')}`);

    const beaconId = buf.slice(20, 40).reverse()
    console.log(`beaconId = ${(beaconId as Buffer).toString('hex')}`);

    const beaconType = buf.slice(40, 41).reverse()
    console.log(`beaconType = ${(beaconType as Buffer).toString('hex')}`);

    const rssi = buf.slice(41, 42).reverse()
    console.log(`rssi = ${(rssi as Buffer).toString('hex')}`);

    const txPower = buf.slice(42, 43).reverse()
    console.log(`txPower = ${(txPower as Buffer).toString('hex')}`);

    const heartRate = buf.slice(43, 44).reverse()
    console.log(`heartRate = ${(heartRate as Buffer).toString('hex')}`);

    const temperature = buf.slice(44, 46).reverse()
    console.log(`temperature = ${(temperature as Buffer).toString('hex')}`);

    const step = buf.slice(46, 48).reverse()
    console.log(`step = ${(step as Buffer).toString('hex')}`);

    const distance = buf.slice(48, 50).reverse()
    console.log(`distance = ${(distance as Buffer).toString('hex')}`);
    return ent;
  }
}

class Lw360hrData {
  protocolVersion: string;
  commandId: string;
  longitude: string;
  latitude: string;
  gpsFixStatus: string;
  reserve: string;

  calorie: string;

  batteryCapacity: string;

  dateTime: string;

  beaconId: string;
  beaconType: string;
  rssi: string;
  txPower: string;
  heartRate: string;
  temperature: string;
  step: string;
  distance: string;
}

export default new Lw360hrService()
