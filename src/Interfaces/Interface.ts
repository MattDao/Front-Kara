

export interface CampProps {
    id: string;
    name: string;
    style: string;
    imgBackground: string;
    body: string;   
}

export interface CardCampProps {
    campAffich: CampProps;
}

export interface CharaProps {
    id: string;
    name: string;
    imgBackground: string;
    imgProfile: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    charisma: number;
    luck: number;
    stealth: number;
    magic: number;
}

export interface CardCharaProps {
    charaAffich: CharaProps;
}

export interface CharaButtonProps {
    charaAffich: CharaProps;
}

export interface CampButtonProps {
    campAffich: CampProps;
}

export interface ItemProps {
    name: string;
}


  
export interface UserData {
    id: string;
    pseudo: string;
    email: string;
    password: string;
    role: string;
  }

  export interface DecodTokenType {
    user: UserData;
    exp: number;
    iat: number;
  }
  export interface HeroProps {
    heroAffich: CharaProps;
  }

 export interface DiceProps {
    numDice: number;
    numFaces: number;
    
  };