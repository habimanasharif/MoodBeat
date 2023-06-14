import { createSlice } from '@reduxjs/toolkit';

interface music{
  cover: string;
  audio: string ;
  title: string;
  normolizedData:number[]
  duration:number

}

interface musicList{
    musicList:music[]
    songNumber: number;
}
const initialState:musicList = {
  musicList: [{
    cover: 'https://www.premadepixels.com/wp-content/uploads/2021/09/Rebirth-Album-Cover-PP1.jpg',
    audio: 'https://beats-api.onrender.com/song/play/882e74e4118ff2552d633f3c47b5d8f7.mp3',
    title: 'Resilience',
    duration: 255,
    normolizedData: [
      0.21127058168690163,
      0.20844373294227778,
      0.16573179972610183,
      0.19310455491367384,
      0.2179625473218092,
      0.8208803971420507,
      0.8865252909202829,
      0.9000130668082563,
      0.7689228260645464,
      0.5900446372706138,
      0.4079482321138734,
      0.9862688941802017,
      0.7598893770867674,
      0.6317556278130035,
      0.817663934545532,
      0.7571173689346451,
      0.8641694799123217,
      0.9864265775119441,
      0.7078582065730098,
      0.740014879310873,
      0.6047638950925451,
      0.9406980751902374,
      0.7760891781814452,
      0.593908560555818,
      0.8247333044780357,
      0.6417390960476649,
      0.969487639237867,
      0.8083638952803227,
      0.6309398371782498,
      0.8231008822619278,
      0.6350179911459555,
      0.8606956983230242,
      1,
      0.6834101853955241,
      0.542487703942324,
      0.3305704752281801,
      0.8869378825672858,
      0.7879898803105003,
      0.6019778319278917,
      0.5089103535290277,
      0.44168613413691526,
      0.8753822321336221,
      0.7530523378093253,
      0.6437531055001635,
      0.7890380265446106,
      0.7683375687184956,
      0.778210487213198,
      0.9659591264016405,
      0.6748032217399689,
      0.7906630206228967,
      0.7373463233033619,
      0.8353035288797305,
      0.7894880644307893,
      0.6610419216433827,
      0.7732125829432478,
      0.7938518135761956,
      0.8117465921206655,
      0.8558381695834637,
      0.6741797373854486,
      0.5473856231252798,
      0.6265559806315717,
      0.7531542397350988,
      0.8080086588380125,
      0.671727208238567,
      0.8693225759080114,
      0.6686539053890548,
      0.7650722586264955,
      0.37964489939431906,
      0.06346408697619502,
      0.006865915999972425
    ]
  },
  {
    cover: 'https://www.premadepixels.com/wp-content/uploads/2023/05/Gunz-Roses-PP1.jpg',
    audio: 'https://beats-api.onrender.com/song/play/b1100cf488e25d1ed4283ffbf9d89bb0.mp3',
    title: 'One Up',
    duration: 265,
    normolizedData: [
      0.0520257634408546,
      0.0776192992537471,
      0.07065604592902464,
      0.08820862041099267,
      0.29332769276911147,
      0.35706060525181643,
      0.41843306729391083,
      0.49136009880138526,
      0.7995407793518855,
      0.973961989497221,
      0.8824584702172263,
      0.955232139222602,
      0.7997767042452855,
      0.9736827275740992,
      0.8833004898809125,
      0.9400893340755294,
      0.8540105762174416,
      0.9451300174985632,
      0.9282416397449277,
      0.8044164785584286,
      0.9696463021092501,
      0.8862391596242449,
      0.9804998146653107,
      0.8154953458396844,
      0.9539100600858196,
      0.91106663961363,
      0.9419865484508964,
      0.7991200474019182,
      0.9808233588386827,
      0.40078152197089645,
      0.7394853357853945,
      0.855490893201943,
      0.9260598871448301,
      0.9817378807726785,
      0.8056903205628723,
      0.9529951706943067,
      0.8984634579792613,
      0.9577527392941874,
      0.7875014232824491,
      0.9954046545143256,
      0.8879469988261433,
      0.7060881637930145,
      0.5660522883955867,
      0.5762882060295624,
      0.6496237651245242,
      0.8088869683991584,
      0.8980810188409658,
      0.8947671701885568,
      1,
      0.7094025526488181,
      0.8058763980340844,
      0.6627923016608667,
      0.49738840132192097,
      0.8090833828668624,
      0.9928078300473246,
      0.4876360952877737,
      0.6835939708597789,
      0.8364847872699369,
      0.9630295930412978,
      0.9094433310679036,
      0.814336633269615,
      0.9477797561236021,
      0.8979890578120157,
      0.8973531543647001,
      0.48841347399522694,
      0.3990664982892898,
      0.3664684722816839,
      0.22829240055082106,
      0.09677275215183383,
      0.01200198106841397
    ]
  },
  {
    cover: 'https://www.premadepixels.com/wp-content/uploads/2023/05/Midi-Hits-Free-PP1.jpg',
    audio: 'https://beats-api.onrender.com/song/play/4239987637a9253ac047e33b3e628417.mpeg',
    title: 'Hot Shit',
    duration: 235,
    normolizedData: [
      0.26717963945822026,
      0.7330422427783218,
      0.7843425299753068,
      0.7840799421728041,
      0.9876556135297887,
      0.7854137976803272,
      0.7937804503203909,
      0.7916124385027293,
      0.9798758062591987,
      0.79211377701882,
      0.7964532558494515,
      0.7882461328680216,
      0.9755744790001929,
      0.36656627199424024,
      0.789268627432517,
      0.7801922816197848,
      0.7967602332971105,
      0.378114719346514,
      0.7398576702887144,
      0.7803074514666387,
      1,
      0.7946495132344752,
      0.782150710234848,
      0.7994977704234478,
      0.9589773939329979,
      0.7956802091424462,
      0.7789054363260297,
      0.7945171571610485,
      0.6412217037464036,
      0.796756165597675,
      0.7915513459451453,
      0.8516468864948876,
      0.8653580221010763,
      0.4574068685657141,
      0.7853948495889702,
      0.9037928324852356,
      0.6761857196317247,
      0.7883624785905596,
      0.7607776278599164,
      0.8596187503595537,
      0.6973021177968551,
      0.7707584971007487,
      0.7861789141010944,
      0.8723633781785722,
      0.5547289988055668,
      0.790134072520603,
      0.7781359588231287,
      0.9246069329789351,
      0.6631482205505739,
      0.5228948745835191,
      0.784062059895728,
      0.9365898614147421,
      0.6700707897253108,
      0.7985301191958696,
      0.7964451886148678,
      0.9324366588891283,
      0.8328295142326244,
      0.7826561469555938,
      0.7803981003189896,
      0.9253513800535726,
      0.8473057360513827,
      0.7758442809767788,
      0.7981709711214874,
      0.833943993874483,
      0.6955737094498091,
      0.7646193458434336,
      0.7733296214389229,
      0.7315374800686668,
      0.11540179398991192,
      0.06527859317237321
    ]
  }
  ],
  songNumber: 0,
};
export const MusicData = createSlice(
  {
    name: 'musicData',
    initialState,
    reducers: {
      setMusicList: (state, action) => {
        state.musicList = action.payload;
      },
      setSongNumber: (state, action) => {
        if (state.musicList[action.payload]) {
          state.songNumber = action.payload;
        } else {
          state.songNumber = 0;
        }
      }
    },
  }
);
export const { setMusicList, setSongNumber } = MusicData.actions;

export default MusicData.reducer;
