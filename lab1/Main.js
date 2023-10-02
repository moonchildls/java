package lab1;

import lab1.move.MovingByFlightStrategy;
import lab1.move.MovingByFootStrategy;
import lab1.move.MovingByRidingStrategy;

public class Main {
    public static void main(String[] args) {
        Hero lisa = new Hero("lisa", new MovingByFootStrategy());
        lisa.move();
        lisa.setMoveStrategy(new MovingByRidingStrategy());
        lisa.move();
        lisa.setMoveStrategy(new MovingByFlightStrategy());
        lisa.move();

        Hero polina = new Hero("polina", new MovingByRidingStrategy());
        lisa.move();
        polina.move();
    }
}