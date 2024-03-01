package com.example.prj;

import com.example.prj.entity.Role;
import com.example.prj.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class UserTests {

	private User user;

	@BeforeEach
	void setUp() {
		user = new User();
		user.setId(1);
		user.setFirstName("Bibek");
		user.setLastName("Pandey");
		user.setEmail("bibek.pandey@example.com");
		user.setPassword("password");
	}

	@Test
	void testGetAuthorities() {
		Role role = new Role();
		role.setId(1);
		role.setName("ROLE_USER");
		user.setRoles(Collections.singletonList(role));

		Collection<? extends GrantedAuthority> authorities = user.getAuthorities();

		assertEquals(1, authorities.size());
		assertTrue(authorities.contains(new SimpleGrantedAuthority("ROLE_USER")));
	}

	@Test
	void testGetUsername() {
		assertEquals("bibek.pandey@example.com", user.getUsername());
	}

	@Test
	void testIsAccountNonExpired() {
		assertTrue(user.isAccountNonExpired());
	}

	@Test
	void testIsAccountNonLocked() {
		assertTrue(user.isAccountNonLocked());
	}

	@Test
	void testIsCredentialsNonExpired() {
		assertTrue(user.isCredentialsNonExpired());
	}

	@Test
	void testIsEnabled() {
		assertTrue(user.isEnabled());
	}
}
