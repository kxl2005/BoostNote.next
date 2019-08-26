import React from 'react'
import styled from '../../../lib/styled'
import { Link, LinkProps } from 'react-router-dom'

export const StyledStorageItem = styled.li`
  margin: 0;
  padding: 0;
`

export const StyledStorageItemHeader = styled.header`
  height: 26px;
  display: flex;
`

export const StyledStorageItemFolderList = styled.ul`
  padding: 0;
  list-style: none;
`

export const StyledStorageItemFolderItem = styled.li`
  display: flex;
  height: 26px;
`

export const StyledNavLink = styled(
  ({ active, ...props }: LinkProps & { active: boolean }) => <Link {...props} />
)<{ active: boolean }>`
  line-height: 26px;
  padding: 0 5px;
  text-decoration: none;
  width: 100%;
  user-select: none;
  ${({ active, theme }) =>
    active && `background-color: ${theme.sideNav.linkActiveBackgroundColor};`}
`