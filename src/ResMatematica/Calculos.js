const cuadraticaa = (a, b, c) => {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
  let rais = Math.pow(b, 2) - 4 * a * c;
  let s1, s2;
  if (rais < 0) {
    rais = -1 * rais;
    const resRais = Math.sqrt(rais);
    // console.log(`${-b} + ${-resRais/(2*a)}j`);
    // console.log(`${-b/(2*a)} + ${resRais/(2*a)}j`);
    s1 = { a: -b / (2 * a), b: -resRais / (2 * a) };
    s2 = { a: -b / (2 * a), b: +resRais / (2 * a) };
    //console.log(s1);
    // console.log(s2);
  } else {
    const resRais = Math.sqrt(rais);
    // console.log(`${-b/(2/a)-resRais/(2*a)}`);
    //console.log(`${-b/(2*a)+resRais/(2*a)}`);
    s1 = { a: -b / (2 * a) - resRais / (2 * a), b: 0 };
    s2 = { a: -b / (2 * a) + resRais / (2 * a), b: 0 };
  }

  return {
    s1,
    s2,
  };
};

const wnf = ({ s1 }) => {
  const w = Math.sqrt(Math.pow(s1.a, 2) + Math.pow(s1.b, 2));
  return w;
};
const qf = ({ s1 }) => {
  const w = Math.atan(s1.b / (s1.a * 1));
  return w;
};
const zf = (q) => {
  const w = Math.cos(q);
  return w;
};
const tcf = (q, wd) => {
  // console.log(q, wd);
  const w = (Math.PI - q) / wd;
  return w;
};
const tpf = (wd) => {
  const w = Math.PI / wd;
  return w;
};
const spf = (z) => {
  const rais = Math.sqrt(1 - Math.pow(z, 2));

  const w = Math.pow(Math.E, -((z * Math.PI) / rais));
  return w;
};
const tsf3 = (z, wn) => {
  const w = 3 / (z * wn);
  return w;
};
const tsf4 = (z, wn) => {
  const w = 4 / (z * wn);
  return w;
};

const calculoGral = (a, b, c, k) => {
  const raices = cuadraticaa(a, b, c);
  if (raices.s2.b !== 0) {
    const wd = raices.s2.b;
    const wn = wnf(raices);
    const q = qf(raices);
    const z = zf(q);
    const tc = tcf(q, wd);
    const tp = tpf(wd);
    const sp = spf(z);
    const spp = sp * 100;
    const ts3 = tsf3(z, wn);
    const ts4 = tsf4(z, wn);
    //console.log(ts4);

    return {
      raices,
      wd,
      wn,
      q,
      z,
      tc,
      tp,
      sp,
      spp,
      ts3,
      ts4,
    };
  } else {
    //const wd = Math.sqrt(k);
    const wn = Math.sqrt(k);
    const q = 180;
    const z = b / (2 * wn);
    return {
      z,
      wn,
      q,
    };
  }
};

const calcSP = (s1, o) => {
  s1 = s1 / 100;
  const a = Math.pow(Math.PI, 2) / (Math.log(s1) * Math.log(s1));

  const z = Math.sqrt(1 / (a + 1)).toFixed(5);
  const k = Math.pow(o / z, 2).toFixed(5);
  console.log("k=" + k);
  return {z,k};
};

export const Calculos = {
  cuadratica: cuadraticaa,
  calculoGral: calculoGral,
  calcSP,
};
