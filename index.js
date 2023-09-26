class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    } else {
      this.name = name;
    }
    const validTypes = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (validTypes.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Недопустимый тип персонажа");
    }

    this.health = 100;
    this.level = 1;

    levelUp () {
      if (this.health <= 0) {
        throw new Error("нельзя повысить левел умершего");
      }
      this.level += 1;
      this.attack *= 1.2
      this.defence *= 1.2;
      this.health = 100;
    }
    damage(points) {
      if (this.health > 0) {
        health -= points * (1 - defence / 100)
      } else {
        this.health = 0;
      }
    }
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}
class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}
