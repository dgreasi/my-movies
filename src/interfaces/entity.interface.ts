interface IFullCast {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  directors: {
    job: string;
    items: {
      id: string;
      name: string;
      description: string;
    }[];
  };
  writers: {
    job: string;
    items: {
      id: string;
      name: string;
      description: string;
    }[];
  };
  actors: {
    id: string;
    image: string;
    name: string;
    asCharacter: string;
  }[];
  others: {
    job: string;
    items: {
      id: string;
      name: string;
      description: string;
    }[];
  }[];
  errorMessage: string;
}

interface IPosterContainer {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  posters: IPoster[] | null;
  backdrops: {
    id: string;
    link: string;
    aspectRatio: number;
    language: string;
    width: number;
    height: number;
  }[];
  errorMessage: string;
}

interface IPoster {
  id: string;
  link: string;
  aspectRatio: number;
  language: string;
  width: number;
  height: number;
}

interface IImageItem {
  title: string;
  image: string;
}

export interface IEntity {
  id: string;
  title: string;
  description?: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: [
    {
      id: string;
      name: string;
    },
  ];
  writers: string;
  writerList: {
    id: string;
    name: string;
  }[];
  stars: string;
  starList: {
    id: string;
    name: string;
  }[];
  actorList: {
    id: string;
    image: string;
    name: string;
    asCharacter: string;
  }[];
  fullCast: IFullCast | null;
  genres: string;
  genreList: [
    {
      key: string;
      value: string;
    },
  ];
  companies: string;
  companyList: {
    id: string;
    name: string;
  }[];
  countries: string;
  countryList: {
    key: string;
    value: string;
  }[];
  languages: string;
  languageList: {
    key: string;
    value: string;
  }[];
  contentRating: string | null;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string | null;
  ratings: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    imDb: string;
    metacritic: string;
    theMovieDb: string;
    rottenTomatoes: string;
    filmAffinity: string;
    errorMessage: string;
  } | null;
  wikipedia: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    language: string;
    titleInLanguage: string;
    url: string;
    plotShort: {
      plainText: string;
      html: string;
    };
    plotFull: {
      plainText: string;
      html: string;
    };
    errorMessage: string;
  } | null;
  posters: IPosterContainer | null;
  images: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    items: IImageItem | null;
    errorMessage: string;
  } | null;
  trailer: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    thumbnailUrl: string;
    uploadDate: string;
    link: string;
    linkEmbed: string;
    errorMessage: string;
  } | null;
  boxOffice: {
    budget: string;
    openingWeekendUSA: string;
    grossUSA: string;
    cumulativeWorldwideGross: string;
  };
  tagline: string | null;
  keywords: string;
  keywordList: string[];
  similars: {
    id: string;
    title: string;
    image: string;
    imDbRating: string;
  }[];
  tvSeriesInfo: {
    yearEnd: string;
    creators: string;
    creatorList: {
      id: string;
      name: string;
    }[];
    seasons: string[];
  } | null;
  tvEpisodeInfo: {
    seriesId: string;
    seriesTitle: string;
    seriesFullTitle: string;
    seriesYear: string;
    seriesYearEnd: string;
    seasonNumber: string;
    episodeNumber: string;
    previousEpisodeId: string;
    nextEpisodeId: string;
  } | null;
  errorMessage: string | null;
}
