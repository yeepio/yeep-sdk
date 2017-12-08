## 0.7.0 - 2017-12-08

* Expose additional method: `petition.reject`.
* Remove redundant response parsing from `petition.assign` and `petition.reject` since they both return `204 "No Content"`.

## 0.6.0 - 2017-12-01

* Expose additional method: `handle.list`.

## 0.5.0 - 2017-12-01

* Expose additional methods: `session.create`, `session.list`.

## 0.4.0 - 2017-11-29

* Expose additional method: `petition.list()`.

## 0.3.0 - 2017-11-28

* Expose additional methods: `user.forgotPassword()`, `user.resetPassword()`.
* Extend `org.create()` to accept `notify` property.

## 0.2.0 - 2017-11-22

* Expose additional methods: `resource.types()`, `resource.list()`, `user.list()`.
* Extend `user.create()` to accept `image` property.
* Fix invalid docs reference.

## 0.1.0 - 2017-11-21

* Initial commit.
