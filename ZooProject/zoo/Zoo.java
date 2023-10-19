package zoo;

public class Zoo {
    public static void main(String[] args) {
        Bird bird = new Bird("Sparrow", 2, "Male");
        Mammal mammal = new Mammal("Lion", 5, "Female");
        Reptile reptile = new Reptile("Snake", 3, "Unknown");

        System.out.println("Bird: " + bird.getName() + ", Age: " + bird.getAge() + ", Gender: " + bird.getGender());
        bird.breed();

        System.out.println("Mammal: " + mammal.getName() + ", Age: " + mammal.getAge() + ", Gender: " + mammal.getGender());
        mammal.breed();

        System.out.println("Reptile: " + reptile.getName() + ", Age: " + reptile.getAge() + ", Gender: " + reptile.getGender());
        reptile.breed();
    }
}
