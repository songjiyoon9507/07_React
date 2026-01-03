package com.example.backend.domain.user.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.example.backend.domain.user.dto.UserRequestDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user_user_entity")
// 이 엔티티가 어떤 테이블과 연관돼있는지 나타냄
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator =  "user_seq_gen")
	@SequenceGenerator(
			name = "user_seq_gen",
			sequenceName = "USER_SEQ",
			allocationSize = 1)
	private Long id;
	// MariaDB
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	/* DB별 프로파일 분리해서 사용하는 방법
	 * @Profile("oracle")
	 * @GeneratedValue(strategy = GenerationType.SEQUENCE, ...)
	 * 
	 * @Profile("mariadb")
	 * @GeneratedValue(strategy = GenerationType.IDENTITY)
	 * */
	
    @Column(name = "username", unique = true, nullable = false, updatable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "is_lock", nullable = false)
    private Boolean isLock;

    @Column(name = "is_social", nullable = false)
    private Boolean isSocial;

    @Enumerated(EnumType.STRING)
    @Column(name = "social_provider_type")
    private SocialProviderType socialProviderType;

    @Enumerated(EnumType.STRING)
    @Column(name = "role_type", nullable = false)
    private UserRoleType roleType;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "email")
    private String email;

    @CreatedDate
    @Column(name = "created_date", updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedDate
    @Column(name = "updated_date")
    private LocalDateTime updatedDate;
    
    public void updateUser(UserRequestDTO dto) {
    	this.email = dto.getEmail();
    	this.nickname = dto.getNickname();
    }
}
