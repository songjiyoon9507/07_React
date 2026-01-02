package com.example.backend.domain.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.domain.user.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	
	Boolean existsByUsername(String username);
	Optional<UserEntity> findByUsernameAndIsLockAndIsSocial(String username, Boolean isLock, Boolean isSocial);
}
