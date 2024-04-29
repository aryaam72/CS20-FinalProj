function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isSubscribed = false;
}

module.exports = {
    User,
}